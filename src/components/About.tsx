import React from "react";

type Props = {
  nameProps1: string;
};

const About = (props: Props) => {
  return (
    <div>
      <h1>From About</h1>
      {props.nameProps1}
    </div>
  );
};

export default About;
