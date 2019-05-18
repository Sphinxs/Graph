import application from "./application";

import config from "./config";

application.listen(config.express.port, () => {
    console.log(`$ server running at ${config.express.port}`);
})