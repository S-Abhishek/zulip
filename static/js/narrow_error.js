import render_empty_feed_notice from "../templates/empty_feed_notice.hbs"

export function narrow_error(narrow_banner_data) {
    const narrow_id = narrow_banner_data["id"]
    const title = narrow_banner_data["title"];
    const html = narrow_banner_data["html"];

    const $empty_feed_notice = render_empty_feed_notice({narrow_id, title, html});
    return $empty_feed_notice
}