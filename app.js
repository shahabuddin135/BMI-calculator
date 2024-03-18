import inquirer from "inquirer";
import chalk from "chalk";
async function calculate() {
    const bmi_calculator = await inquirer.prompt([
        {
            type: "number",
            name: "weight",
            message: "Enter your weight (kg)"
        },
        {
            type: "number",
            name: "height",
            message: "enter your height (meters)"
        }
    ]);
    let bmi = bmi_calculator.weight / (bmi_calculator.height * bmi_calculator.height);
    console.log(chalk.bgBlue(`Your BMI is ${bmi}`));
}
;
calculate();
