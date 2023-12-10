/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PropInterface {
  [key: string]: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<PropInterface> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
