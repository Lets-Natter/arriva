## Arriva (aka. an event bus)

#### A minimal service to get and distribute events for [Natter](https://github.com/qasimabdullah404/natter-away) and [Cross Natter](https://github.com/qasimabdullah404/cross-natter)

Run:

```
docker build . -t arriva
docker run --network host -p 5005:5005 -d arriva
```
