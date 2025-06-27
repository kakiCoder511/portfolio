import "./HobbiesSlider.css";

const images = [
  "/Projects/hobbies/5C9C9E04-488B-4D47-A974-4D2A4D4ABDDA.JPG",
  "/Projects/hobbies/57C0E4C0-3440-4E6B-B521-20097106D455.JPG",
  "/Projects/hobbies/300BA144-201D-4263-BC16-8D9D51003FC4.JPG",
  "/Projects/hobbies/00390006.jpg",
  "/Projects/hobbies/01440002.jpg",
  "/Projects/hobbies/01440008.jpg",
  "/Projects/hobbies/01440013.jpg",
  "/Projects/hobbies/01440018.jpg",
  "/Projects/hobbies/01440027.jpg",
  "/Projects/hobbies/07270032.JPG",
  "/Projects/hobbies/AB73B240-C683-4E4C-B0A8-6F4681DA6817.JPG",
  "/Projects/hobbies/AEDFAC73-16B7-4ED7-B5F6-EA72F5BD7DCC.JPG",
  "/Projects/hobbies/CD223666-BFFA-42B1-BCEF-4F6507BB446D.jpg"
];


export default function HobbiesSlider() {
  return (
    <div className="slider-wrapper">
      <div className="slider">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`hobby-${index}`} className="slider-image" />
        ))}
      </div>
    </div>
  );
}
