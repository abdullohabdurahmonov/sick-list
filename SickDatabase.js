const sickDb = [];

class Sick {

        constructor({fullname, address, sickness, gender, level, phoneNumber}){
            this.fullname = fullname;
            this.address = address;
            this.sickness = sickness;
            this.gender = gender;
            this.level = level;
            this.phoneNumber = phoneNumber;
     }
    save(){
      const newSick = {
        id:sickDb.length,
        ...this,
      };
      sickDb.push(newSick);
      localStorage.setItem("patients", JSON.stringify(sickDb));
      return newSick;
    }
    static render(renderElId){
      const renderEl = document.getElementById(renderElId)
      renderEl.innerHTML = ""
      for (let patient of sickDb){
        const template = `
                            <tr>
                                <th scope="row">${patient.id}</th>
                                <td>${patient.fullname}</td>
                                <td>${patient.sickness}</td>
                                <td>${patient.address}</td>
                                <td>${patient.phoneNumber}</td>
                                <td>${patient.level}</td>
                                <td>${patient.gender}</td>
                            </tr>
                            `;
          renderEl.innerHTML += template;                  
      }
    }
}
