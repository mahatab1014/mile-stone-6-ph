const loadAiNews = async (tools) => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/ai/tools"
  );
  const jsonData = await response.json();
  const data = jsonData.data.tools;
  //   console.log(data);
  displayTools(data);
};

loadAiNews();

const displayTools = (tools) => {

    const toolsNewsContainer = document.getElementById("ai-news-container");

  tools.forEach((tool) => {

    const toolsNewsTemplate = `
    
    <div class="card h-full bg-base-100 border">
        <figure class="px-5 pt-5">
            <img src="${tool.image}" alt="Ai Universe" class="rounded-xl" />
        </figure>
        <div class="card-body p-5 items-start">
            <h2 class="card-title">${tool.name}</h2>
            <ul class="list-inside list-[auto] text-gray-600">
                <li>${tool.features[0] ? tool.features[0]:"Data Not Found"}</li>
                <li>${tool.features[1] ? tool.features[1]:"Data Not Found"}</li>
                <li>${tool.features[2] ? tool.features[2]:"Data Not Found"}</li>
            </ul>
            <div class="divider mt-1 mb-1"></div>
            <div class="w-full">
                <h2 class="card-title">ChatGPT</h2>
                <div class="flex justify-between items-center">
                    <div class="date text-gray-600">
                        <span><i class="fa fa-calendar"></i></span>
                        <span>${tool.published_in}</span>
                    </div>
                    <div>
                        <button class="btn btn-warning text-lg rounded-full">
                            <i class="fas fa-angle-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    const toolsNews = document.createElement("div");
    toolsNews.innerHTML = toolsNewsTemplate;
    toolsNewsContainer.appendChild(toolsNews);

    console.log(tool);
  });
};
