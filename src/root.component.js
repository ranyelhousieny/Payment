export default function Root(props) {
  return (
    <section>
      {props.name} is mounted! By {props.myProp}
    </section>
  );
}
