# ShopEZ - React Native (Expo) App

## You may use te following details to LogIn:

- Firstly Run: npx expo start and once the app is running, you may enter the following details.
- Email: test@gmail.com
- Password: Password$1234


## or  Sign Up with your own credentials and Login or create your own firebase database by following the instructions below:


## Quick setup
1. Clone / extract project.
2. Run `npm install` or `yarn` to install dependencies.
3. Create a Firebase project (console.firebase.google.com):
   - Enable **Authentication** > Sign-in method > **Email/Password**.
   - Create a **Realtime Database** (in test mode for dev).
   - Copy your Firebase config and paste into `firebaseConfig.js` (see placeholder).
4. Run `npx expo start` and open on emulator or device.

## Screens included
- Register
- Login
- Product List (fetches from https://fakestoreapi.com/products)
- Product Detail (Add to Cart)
- Cart

## Notes
- Replace Firebase config in `firebaseConfig.js`.

## Testing
- Create a user via Register screen.
- Add products to cart, check Cart screen.


## Packages to install

npm install @react-navigation/native @react-navigation/native-stack \
firebase @react-native-async-storage/async-storage \
react-native-screens react-native-safe-area-context react-native-gesture-handler



