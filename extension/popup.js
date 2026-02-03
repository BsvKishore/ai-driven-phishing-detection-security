function generatePassword(options) {
 let chars = "";
 if (options.upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 if (options.lower) chars += "abcdefghijklmnopqrstuvwxyz";
 if (options.digits) chars += "0123456789";
 if (options.symbols) chars += "!@#$%^&*()-_=+[]{};:,.<>?";
 if (!chars) {
 return "Please select at least one character type.";
 }
 let password = "";
 for (let i = 0; i < options.length; i++) {
 password += chars[Math.floor(Math.random() * chars.length)];
 }
 return password;
}
document.addEventListener("DOMContentLoaded", () => {
 const lengthRange = document.getElementById("lengthRange");
 const lengthValue = document.getElementById("lengthValue");
 const generateBtn = document.getElementById("generateBtn");
 const copyBtn = document.getElementById("copyBtn");
 const passwordBox = document.getElementById("passwordBox");
 const includeUpper = document.getElementById("includeUpper");
 const includeLower = document.getElementById("includeLower");
 const includeDigits = document.getElementById("includeDigits");
 const includeSymbols = document.getElementById("includeSymbols");
 // Update display of length value
 lengthRange.addEventListener("input", () => {
 lengthValue.textContent = lengthRange.value;
 });
 generateBtn.addEventListener("click", () => {
 const options = {
 length: parseInt(lengthRange.value, 10),
 upper: includeUpper.checked,
 lower: includeLower.checked,
 digits: includeDigits.checked,
 symbols: includeSymbols.checked
 };
 const password = generatePassword(options);
 passwordBox.textContent = password;
 });
 copyBtn.addEventListener("click", async () => {
 const text = passwordBox.textContent.trim();
 if (!text) {
 alert("No password to copy!");
 return;
 }
 try {
 await navigator.clipboard.writeText(text);
 alert("Password copied to clipboard!");
 } catch (e) {
 console.error(e);
 alert("Failed to copy password.");
 }
 });
});
