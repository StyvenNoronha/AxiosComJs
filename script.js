const getData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response)
        return response.data; // Retorna os dados obtidos da requisição
        
    } catch (error) {
        console.log(error);
    }
};

const container = document.querySelector("#user-container");

const printData = async () => {

        const data = await getData();
        console.log(data);

        data.forEach((user) => {
            const div = document.createElement("div");
            const nameElement = document.createElement("h2");
            nameElement.textContent = user.name;
            div.appendChild(nameElement);

            const email = document.createElement('p');
            email.textContent = user.email
            div.appendChild(email)

            container.appendChild(div);
        });

};

printData();
