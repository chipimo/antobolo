import React from "react";
import { Button } from "antd";

export default function Footer() {
  return (
    <div
      style={{
        paddingTop: 20,
        paddingRigth: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        backgroundColor: "#2d4536",
        color: "#cccccc",
        textAlign: "center"
      }}
    >
      <div
        className="icons-list"
        style={{ width: "100%", justifyContent: "space-between" }}
      >
        <Button
          type="link"
          style={{ marginRight: 10 }}
          shape="round"
          icon="facebook"
        >
          Facebook
        </Button>
        <Button
          href="tel:123-456-7890"
          type="link"
          style={{ marginRight: 10 }}
          shape="round"
          icon="phone"
        >
          Call Us Now
        </Button>
      </div>
      <p>☆☆☆☆☆</p>

      <p>&#9400; 2019 Antobolo | All rights reserved </p>
    </div>
  );
}
