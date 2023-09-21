import { models, Report } from "powerbi-client";
import { bootstrapEmbed } from "../constant";
import { $question } from "../store";
export const generateEmbedConfig = (type, config) => {
  console.log("config", config);
  let baseConfig = {
    // Supported types: report, dashboard, tile, visual, qna and paginated report
    id: config?.embedDetails.reportId,
    embedUrl: config?.embedDetails.embedUrl,
    accessToken: config?.accessToken,
    tokenType: models.TokenType.Embed,
    settings: {
      panes: {
        filters: {
          expanded: false,
          visible: false,
        },
      },
      background: models.BackgroundType.Transparent,
    },
  };

  if (type.toLowerCase() === "report") {
    return {
      ...baseConfig,
      type: "report",
    };
  } else if (type.toLowerCase() === "page") {
    return {
      ...baseConfig,
      type: "report",
      pageName: config ? "ReportSection" : undefined,
    };
  } else if (type.toLowerCase() === "visual") {
    return {
      ...baseConfig,
      pageName: "ReportSection",
      visualName: "4346212f04db60192e95",
      type: "visual",
    };
  } else if (type.toLowerCase() === "qna-1") {
    return {
      ...baseConfig,
      id: undefined,
      datasetIds: [config?.embedDetails.datasetId],
      viewMode: 0,
      type: "qna",
      embedUrl: "https://app.powerbi.com/qnaEmbed",
    };
  } else if (type.toLowerCase() === "qna-2") {
    return {
      ...baseConfig,
      id: undefined,
      datasetIds: [config?.embedDetails.datasetId],
      viewMode: 1,
      question: $question.get(),
      type: "qna",
      embedUrl: "https://app.powerbi.com/qnaEmbed",
    };
  }
  return null;
};
