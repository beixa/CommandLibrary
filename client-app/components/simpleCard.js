import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import styles from "../styles/SimpleCard.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function SimpleCard({ command }) {
  return (
      <Card variant="elevation" elevation={10} style={{"marginTop":"2rem"}}>
        <CardContent>
          <p className={styles.description}>{command.howTo}</p>
          <SyntaxHighlighter language="batch">{command.line}</SyntaxHighlighter>
        </CardContent>
      </Card>
  );
}
