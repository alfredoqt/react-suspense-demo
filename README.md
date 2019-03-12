# React Suspense Demo
A demo that uses the React.Suspense API. It uses an alpha version of React which is no longer available. The functionality is similar to the one shown in (Dan Abramov's Suspense Demo)[https://www.youtube.com/watch?v=6g3g0Q_XVb4].
## Features
* Uses React Suspense API to suspend components while they are being fetched or retrieved from the cache using the experimental (react-cache)[https://www.npmjs.com/package/react-cache].
* It uses the experimental (scheduler)[https://www.npmjs.com/package/scheduler] package to schedule callbacks with low priority. Such as setting state as soon as component is no longer suspended.
