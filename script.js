const btnAbout = document.getElementById("btnAbout");
const btnLeadership = document.getElementById("btnLeadership");
const btnHistory = document.getElementById("btnHistory");
const btnEnvSocial = document.getElementById("btnEnvSocial");
const btnCareers = document.getElementById("btnCareers");
const backgroudnContainer = document.getElementById("about_container");
const about_title= document.getElementById("about_title");
const about_description = document.getElementById("about_description")

btnAbout.onclick = () => {
    backgroudnContainer.style.backgroundImage = "url('./assets/Welder.jpg')";
    about_title.innerHTML = "About Chart Industry";
    about_description.innerHTML = "Chart Industries, Inc. is a leading independent global manufacturer of highly engineered equipment servicing multiple applications in the Energy and Industrial Gas markets.  Our unique product portfolio is used in every phase of the liquid gas supply chain, including upfront engineering, service and repair.";
}

btnLeadership.onclick = () => {
    backgroudnContainer.style.backgroundImage = "url('./assets/Leadership.jpg')";
    about_title.innerHTML = "Leadership";
    about_description.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, aut quibusdam consequuntur, cumque iusto recusandae quis incidunt libero quisquam laborum veritatis quod, odio dolores facere esse. Nostrum voluptas obcaecati doloremque.";
}

btnHistory.onclick = () => {
    backgroudnContainer.style.backgroundImage = "url('./assets/History.jpg')";
    about_title.innerHTML = "History";
    about_description.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, aut quibusdam consequuntur, cumque iusto recusandae quis incidunt libero quisquam laborum veritatis quod, odio dolores facere esse. Nostrum voluptas obcaecati doloremque.";
}

btnEnvSocial.onclick = () => {
    backgroudnContainer.style.backgroundImage = "url('./assets/Enviroment&Social.jpg')";
    about_title.innerHTML = "Enviroment & Socail";
    about_description.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, aut quibusdam consequuntur, cumque iusto recusandae quis incidunt libero quisquam laborum veritatis quod, odio dolores facere esse. Nostrum voluptas obcaecati doloremque.";
}

btnCareers.onclick = () => {
    backgroudnContainer.style.backgroundImage = "url('./assets/Careers.jpg')";
    about_title.innerHTML = "Careers";
    about_description.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, aut quibusdam consequuntur, cumque iusto recusandae quis incidunt libero quisquam laborum veritatis quod, odio dolores facere esse. Nostrum voluptas obcaecati doloremque.";
}