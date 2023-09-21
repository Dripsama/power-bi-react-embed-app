import { PowerBIEmbed } from "powerbi-client-react";
import { models, Report } from "powerbi-client";
import { useEffect, useState } from "react";
import { eventHandlerMap } from "../constant";
//import { bootstrapEmbed } from "../constant";
import { generateEmbedConfig } from "./utils";
export const PowerBIComponent = ({ type, config }) => {
  console.log("type+config", type, config);

  const [report, setReport] = useState(null);
  const [embedConfiguration, setEmbedConfiguration] = useState(null);

  useEffect(() => {
    if (config !== null) {
      setEmbedConfiguration(null);
      setEmbedConfiguration(generateEmbedConfig(type, config));
    }
  }, [type, config]);

  console.log("embed", embedConfiguration);

  if (embedConfiguration) {
    return (
      <PowerBIEmbed
        embedConfig={embedConfiguration}
        eventHandlers={eventHandlerMap}
        cssClassName={"reportClass"}
        getEmbeddedComponent={(embeddedReport) => {
          setReport(embeddedReport);
        }}
      />
    );
  }
};
