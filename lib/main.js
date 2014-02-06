var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

pageMod.PageMod({
  include: "*.twitter.com",
  contentScriptFile: [self.data.url("jquery.js"), self.data.url("fireChanges.js")],
  contentScriptWhen: "end"
});
