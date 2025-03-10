const repositories = document.querySelector('.content-main');

function getApiGitHub(){
    fetch('https://api.github.com/users/OTAVIO019/repos')
    .then(async res => {
        if (!res.ok) {
            throw new Error(res.status);
        }

        let data = await res.json();
        data.map(item => {
            let project = document.createElement('div');

            project.innerHTML = `
              <div class="project">
                <div>
                    <h4 class="title">${item.name}</h4>
                    <span class="date-create">${Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</span>
                </div>
                <div>
                    <a href="${item.html_url}">${item.html_url}</a>
                    <span class="linguagem"><span class="circle"></span>${item.language}</span>
                </div>
              </div>
            `

            repositories.appendChild(project);
        });
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

getApiGitHub();
