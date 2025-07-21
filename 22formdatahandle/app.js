import express from "express";
import { engine } from "express-handlebars";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import { userSchema } from "./validation/zod.js";
import Handlebars from "handlebars";
import { template } from "./data.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 4000;
const app = express();

//handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));

Handlebars.registerHelper("recursiveSumon", (obj) => {
    let output = `<ul>`;

    for (const key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            output += `<li>${key}: ${Handlebars.helpers.recursiveSumon(
                obj[key]
            )} </li>`;
        } else output += `<li>${key}: ${obj[key]} </li>`;
    }

    output += `</ul>`;

    return new Handlebars.SafeString(output);
});

Handlebars.registerHelper("stringParser", (str, userData) => {
    let i = 0;
    let result = "";
    while (i < str.length) {
        if (str.startsWith("{{", i)) {
            let end = str.indexOf("}}", i);

            if (end != -1) {
                let key = str.slice(i + 1, end);
                result += userData[key];
                i = end + 2;
            } else i++;
        } else {
            result += str[i];
            i++;
        }
    }

    return result;
});

Handlebars.registerHelper("userDataParser", (template, userData) => {
    if (Array.isArray(template)) {
        return template.map((value) =>
            Handlebars.helpers.userDataParser(value, userData)
        );
    }

    if (typeof template === "string")
        return Handlebars.helpers.stringParser(template, userData);

    if (typeof template === "object") {
        let result = {};

        for (const key in template) {
            result[key] = Handlebars.helpers.userDataParser(
                template[key],
                userData
            );
        }

        return result;
    }

    // return template;
});

app.get("/", (req, res) => {
    res.render("form");
});

app.post("/submit", (req, res) => {
    const userData = req.body;

    const data = Handlebars.helpers.userDataParser(template, userData);

    console.log(data);

    // const result = userSchema.safeParse(data);

    // if (!result.success)
    //     return res.send(
    //         "Invalid input: " + JSON.stringify(result.error.format())
    //     );

    return res.render("result", { user: data });
});

app.listen(PORT, () => {
    console.log(`server is running on PORT: http://localhost:${PORT}`);
});
