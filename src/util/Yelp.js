const apiKey =
  "XKghg3yLtLCKWRtHFcPj4q8rMhV9dTc5qQG9GRk9SUSHhstTj6gVTVkh8GR6eyNOFAUeCP0Ia1ihN2nT-02yv8590SO7VTG--JJkg0srOBxzDO3oFZpq_bo18CK0XnYx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    ).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      console.log(jsonResponse);
      if(jsonResponse.businesses) {
        return jsonResponse.businesses.map((business) => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        });
      }
    });
  },
};

export {Yelp};
