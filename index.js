#!/usr/bin/env node

"use strict";

import boxen from "boxen";
import chalk from "chalk";
import clear from "clear";
import inquirer from "inquirer";
import open from "open";

// clear the terminal before showing the npx card
clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
            {
                // Use chalk to style headers
                name: `Toss an ${chalk.bold("email")}?`,
                value: () => {
                    open("mailto:dinhblade123@gmail.com");
                    console.log(
                        "\nLooking forward to hearing your message and replying to you!\n"
                    );
                },
            },
            {
                name: "Exit",
                value: () => {
                    console.log("Good bye, see u!\n");
                },
            },
        ],
    },
];

const data = {
    name: chalk.bold.green("Tran Phuong Dinh"),
    handle: chalk.white("@tranphuongdinh"),
    fact: chalk.hex("#e303fc")("I love Vo Ngoc Tin!"),
    github: chalk.hex("#787878")("https://github.com/tranphuongdinh"),
    website: chalk.hex("#00AB9E")("https://tranphuongdinh.github.io/dinhtran"),
    npx: chalk.hex("#A1AB00")("npx tpd-card"),

    labelFact: chalk.hex("#FF6262").bold("Fun Fact:"),
    labelGitHub: chalk.hex("#9E9E9E").bold("GitHub:"),
    labelWebsite: chalk.hex("#59FFC8").bold("Website:"),
    labelCard: chalk.hex("#FFF976").bold("Card:"),
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        ``,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelWebsite}  ${data.website}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold(
            "Hi there! I'm Tran Phuong Dinh, and I love Vo Ngoc Tin!\n远走的风沙去谁的天涯,\n春天可曾在哪里见过他."
        )}`,
    ].join("\n"),
    {
        margin: 1,
        float: "center",
        padding: 1,
        borderStyle: "single",
        borderColor: "blue",
        textAlignment: "center",
    }
);

// Show the boxen
console.log(me);

const tip = [
    `Tip: ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above to open them in your broswer.`,
    "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
