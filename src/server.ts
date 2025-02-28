import app from "./app";
import { config } from "./config/environment";
import { logger } from "./utils/logger";

const port = config.port;

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
