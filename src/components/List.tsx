import React from "react";

// Мы создаем интерфейс Props, который принимает дженерик T.
// Дженерики (Generics) позволяют компоненту работать с данными разных типов (например, строки, числа, объекты и т.д.).
// Интерфейс Props имеет два свойства:
// 1. items: массив элементов типа T. Это может быть массив любых объектов, например, массив строк или объектов пользователей.
// 2. renderItem: функция, которая принимает элемент типа T и возвращает React-элемент (JSX). Эта функция используется для того, чтобы описать, как нужно отображать каждый элемент списка.
interface Props<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

// Определяем функциональный компонент List, который также использует дженерик T.
// Мы явно указываем, что компонент принимает пропсы типа Props<T>.
// T здесь может быть любым типом данных, например, строкой, объектом, числом и т.д.
export default function List<T>(props: Props<T>) {
  return (
    <div>
      {/* Здесь мы используем метод map() для перебора каждого элемента в массиве items.
          Для каждого элемента вызывается функция renderItem, которая передана в качестве пропса.
          Эта функция отвечает за рендеринг каждого элемента списка.
          Мы используем краткую запись map(props.renderItem), чтобы передать текущий элемент в функцию renderItem.
      */}
      {props.items.map(props.renderItem)}
    </div>
  );
}
