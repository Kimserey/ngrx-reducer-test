# Ngrx Reducer AOT testing

Reproduces the issue where reducer state can't be initialised when the reducers are specified on `StoreModule.forRoot` using spread operator.

```
// app.module.ts
StoreModule.forRoot(fromRoot.reducers),
StoreModule.forRoot({ ...fromRoot.reducers }), <-- null state
StoreModule.forRoot(Object.assign({}, fromRoot.reducers)), <-- null state
```

```
ng serve --aot
```

```
core.js:7187 ERROR TypeError: Cannot read property 'message' of undefined
    at getMessage (hello.reducer.ts:32)
    at store.js:944
    at memoized (store.js:859)
    at defaultStateFn (store.js:899)
    at store.js:953
    at memoized (store.js:859)
    at MapSubscriber.project (store.js:778)
    at MapSubscriber._next (map.js:29)
    at MapSubscriber.next (Subscriber.js:49)
    at MapSubscriber._next (map.js:35)
```