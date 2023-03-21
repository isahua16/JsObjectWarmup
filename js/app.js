let my_city = {
    name: `Edmonton`,
    population: 1000000,
    is_capital: true,
    communities: [
        {
            name: `community_one`,
            population: 100000,
        }, 
        {
            name: `community_two`,
            population: 200000
        },
        {
            name: `community_three`,
            population: 200000
        },
        {
            name: `community_four`,
            population: 200000  
        },
        {
            name: `community_five`,
            population: 200000
        }
    ]
}

if (my_city.is_capital === true)
{
    console.log(my_city.name, my_city.population);
} else
{
    console.log(`Not important enough`);
}

let i = 0;
while(i < my_city.communities.length)
{
    
    if (my_city.communities[i].population >= 100)
    {
        console.log(my_city.communities[i]);
    }
    i++;
}

let community_sum = 0;
for(let i = 0; i < my_city.communities.length; i++)
{
    community_sum = community_sum + my_city.communities[i].population;
}

if(community_sum === my_city.population) {
    console.log(`The math checks out`);
} else 
{
    console.log(`We are missing some people`);
}



