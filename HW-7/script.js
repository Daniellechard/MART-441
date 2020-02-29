var array= new Array();
var images = ['images/starryNight.jpg', 'images/sunflowers.jpg', 'images/irises.jpeg', 'images/poppies.jpeg', 'images/mulberryTree.jpg'];

class finderClass
{
  constructor (Title, Description, Author, Year)
  {
    this.Title = Title;
    this.Description = Description;
    this.Author = Author;
    this.Year = Year;
  }

  toStringTitle()
  {
    return this.Title;
  }
  toStringDescription()
  {
    return 'Description: ' + this.Description;
  }
  toStringAuthor()
  {
    return 'Author: ' + this.Author;
  }
  toStringYear()
  {
    return 'Year: ' + this.Year;
  }
}

function makeArray()
{
   var pic1 = new finderClass('Starry Night', 'Vincent van Gogh painted Starry Night in 1889 during his stay at the asylum of Saint-Paul-de-Mausole near Saint-Rémy-de-Provence. Van Gogh lived well in the hospital; he was allowed more freedoms than any of the other patients. If attended, he could leave the hospital grounds; he was allowed to paint, read, and withdraw into his own room. He was even given a studio. While he suffered from the occasional relapse into paranoia and fits - officially he had been diagnosed with epileptic fits - it seemed his mental health was recovering. Unfortunately, he relapsed. He began to suffer hallucination and have thoughts of suicide as he plunged into depression. Accordingly, there was a tonal shift in his work. He returned to incorporating the darker colors from the beginning of his career and Starry Night is a wonderful example of that shift. Blue dominates the painting, blending hills into the sky. The little village lays at the base in the painting in browns, greys, and blues. Even though each building is clearly outlined in black, the yellow and white of the stars and the moon stand out against the sky, drawing the eyes to the sky. They are the big attention grabber of the painting.', 'Vincent Van Gogh', '1889', );
  var pic2 = new finderClass('Sunflowers', 'Vincent Van Gogh', '1887-89', 'Although his sunflower paintings are very similar in many aspects, each stands out as its own unique work of art. Van Gogh began painting sunflowers after he left Holland for France in pursuit of creating an artistic community. The firsts were created to decorate the bedroom of a friend. The majority of his sunflowers in vases were created in Arles, France during 1888-1889. Van Gogh did create some sunflower paintings prior to this time though in Paris, France around the time of 1887. This series consists of sunflower clippings verses sunflowers in vases.');
  var pic3 = new finderClass('Irises', 'Vincent Van Gogh', '1889', 'On May 8, 1889, Vincent Van Gogh committed himself to the asylum at Saint Paul-de-Mausole in Saint-Remy, France after many instances of hospitalization and self-mutilation. During his stay he painted some 130 paintings with the surrounding gardens and clinic becoming his main subjects for painting. Among these were the famous The Starry Night and Irises. Inspired by the nature surrounding him, Van Gogh began his work on Irises within the first week of his stay at the asylum. Irises was most likely influenced by Japanese woodblock prints which were produced beginning in the 17th century. Like many artists of his time Van Gogh was influenced by the Japanese works. The use of black contours in Irises is a typical element of Japanese woodblock prints. It helped to reinforce the expressive power of the painting.');
  var pic4 = new finderClass('Poppies', 'Vincent Van Gogh', '1886-1890', 'Between the years 1886 and 1890, Vincent van Gogh completed seven different paintings featuring poppy flowers. His earliest ones were done during his time in Paris mainly of cut flowers in vases such as Vase with Red Poppies, 1886 and Vase with Cornflowers and Poppies, 1887. Van Gogh did not have money to pay models, so still-life painting became more practical. In a letter from 1886, Van Gogh wrote to the artist Horace M. Livens about how he put more emphasis on the colors in his paintings and how in using vibrant contrasting colors he is able to render life through color.');
  var pic5 = new finderClass('Mulberry Tree', 'Vincent Van Gogh', '1889', 'Van Gogh painted The Mulberry Tree in October of 1889 less than a year before he would die. Like most of his art, it was done during a period of highs and lows painted during a time of great self-awareness and yet surrounded by chaos. Following a fight with his fellow artist Gauguin, during which the famous ear incident occurred, Van Gogh went to stay at the Saint Paul Asylum in Saint-Remy. He was there for about a year, from May 1889 to May 1890. After the incident in Arles, his mental state declined. He became paranoid thinking people were trying to poison him. While at Saint-Remy he wrote to his brother Theo about his state of mind, his new works, and the people around him. In the letters he acknowledges that he has been in a bad place mentally, but that he feels he is getting better. Seeing all the other patients with similar issues made him feel like he was not alone.');

array.push(pic1, pic2, pic3, pic4, pic5);
}

function accessInformation()
{
  var rand = Math.floor(Math.random() * images.length);

  document.getElementById('Artwork').src=images[rand];
  document.getElementById('Title').innerHTML = array[rand].toStringTitle();
  document.getElementById('Description').innerHTML = array[rand].toStringDescription();
  document.getElementById('Author').innerHTML = array[rand].toStringAuthor();
  document.getElementById('Year').innerHTML = array[rand].toStringYear();
}
