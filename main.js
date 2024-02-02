const sickForm = document.getElementById("sickForm");

sickForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const[fullname, sickness, address, phoneNumber, male, female, level] = 
    event.target;
    const newSickObj = {
        fullname: fullname.value,
        sickness: sickness.value,
        address: address.value,
        phoneNumber: phoneNumber.value,
        gender: male.checked ? "male" : "female",
        level: level.value,
};
const newSick = new Sick (newSickObj);
newSick.save();
Sick.render("tableBody");
});