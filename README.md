# React 18v

- 간단한 ToDo App을 통해 성능 개선 체험
- automatic batching 을 통해서 state rendering 퍼포먼스 향상
- 새로운 Transaction 기능을 통해 UI 업데이트에 우선순위 부여

## Transition

```

startTransition(() => {
  setToDo((prev) => {
    return [...prev, value];
  });
});
setValue("");

{isPending && <div>loading...</div>}

```

## Automatic Batching

```
const handleSubmit = (event) => {
  event.preventDefault();
  if (value === "" || value === null) {
    return;
  }

  setKeyword(value);
  setValue("");
};

```
