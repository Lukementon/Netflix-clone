import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import "./PlansScreen.css";
import { loadStripe } from "@stripe/stripe-js";
import { getSubscription } from "../actions/userAction";

const PlansScreen = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const { user } = useSelector(state => state.user);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(async subscription => {
          setSubscription({
            role: subscription.data().role,
            current_period_end: subscription.data().current_period_end.seconds,
            current_period_start:
              subscription.data().current_period_start.seconds,
          });
          const role = subscription.data().role;
          dispatch(getSubscription(role));
          console.log(role);
        });
      });
  }, [dispatch, user.uid]);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then(querySnapshot => {
        const products = {};
        querySnapshot.forEach(async productDoc => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach(price => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  const loadCheckout = async priceId => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async snap => {
      const { error, sessionId } = snap.data();

      if (error) {
        // Show an error to your customer and inspect your cloud funtion logs in the firebase console.
        alert(`An error occured: ${error.message}`);
      }

      if (sessionId) {
        // We have a session, lets redirect to Checkout Init Stripe

        const stripe = await loadStripe(
          "pk_test_51J1CkKFRkQJux5QHpftyJmUTkVFO0lghx4wiBmTkfMDkfKChSvWWuyJTG2MSGWiyE6LIRIrRENzweyQ9hPtodfec00Xv1q8yJS"
        );
        stripe.redirectToCheckout({
          sessionId,
        });
      }
    });
  };

  return (
    <div className="plansScreen">
      {subscription && (
        <p>
          Renewal Date:{" "}
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        // Add some logic to check if user subscription is active

        const isCurrentPackage = productData.name
          ?.toLowerCase()
          .includes(subscription?.role);
        return (
          <div
            key={productId}
            className={`${
              isCurrentPackage && "plansScreen_plan--disabled"
            } plansScreen_plan`}
          >
            <div className="plansScreen_info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            <button
              onClick={() =>
                !isCurrentPackage && loadCheckout(productData.prices.priceId)
              }
            >
              {isCurrentPackage ? "Current Package" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PlansScreen;
