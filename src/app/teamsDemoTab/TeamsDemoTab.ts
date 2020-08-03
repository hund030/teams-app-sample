import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/teamsDemoTab/index.html")
@PreventIframe("/teamsDemoTab/config.html")
@PreventIframe("/teamsDemoTab/remove.html")
export class TeamsDemoTab {
}
