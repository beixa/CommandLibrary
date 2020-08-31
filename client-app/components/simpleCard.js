import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import styles from "../styles/SimpleCard.module.css";

export default function SimpleCard({ command }) {
  return (
      <Card variant="elevation" elevation={10} style={{"marginTop":"2rem"}}>
        <CardContent>
          <p className={styles.description}>{command.howTo}</p>
          <code className={styles.code}>{command.line}</code>
        </CardContent>
      </Card>
  );
}
