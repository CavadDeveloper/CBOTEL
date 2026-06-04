import { useParams, Link } from "react-router-dom";

import bruschetta from "../assets/images/Menu/bruschetta.jpg";
import burger from "../assets/images/Menu/burger.jpg";
import cheesetoast from "../assets/images/Menu/cheesetoast.jpg";
import eggsucuk from "../assets/images/Menu/eggsucuk.jpg";
import fries from "../assets/images/Menu/fries.jpg";
import lemonade from "../assets/images/Menu/lemonadjuice.jpg";
import menemen from "../assets/images/Menu/menemen.jpg";
import mojito from "../assets/images/Menu/mojito.jpg";
import nuggets from "../assets/images/Menu/nuggets.jpg";
import orangejuice from "../assets/images/Menu/orangejuice.jpg";
import pancakes from "../assets/images/Menu/pancakes.jpg";
import pizza from "../assets/images/Menu/pizza.jpg";
import plov from "../assets/images/Menu/plov.jpg";
import omlet from "../assets/images/Menu/omlet.jpg";
import sangria from "../assets/images/Menu/sangria.jpg";
import sezar from "../assets/images/Menu/sezarsalad.jpg";
import schnitzel from "../assets/images/Menu/shcnitzel.jpg";
import spaghetti from "../assets/images/Menu/spaghetti.jpg";
import steak from "../assets/images/Menu/steak.jpg";
import tea from "../assets/images/Menu/tea.jpg";

export default function MenuDetail() {
  const { id } = useParams();

  const meals = [
    {
      image: omlet,
      title: "Tərəvəzli omlet",
      category: "Səhər yeməkləri",
      price: "8 AZN",
      ingredients: "Yumurta, pomidor, bibər, göyərti, pendir və xüsusi ədviyyatlar.",
      recipe: "Təzə tərəvəzlər qovrulur və yumurta ilə birlikdə zəif odda bişirilir.",
    },
    {
      image: cheesetoast,
      title: "Pendirli tost",
      category: "Səhər yeməkləri",
      price: "6 AZN",
      ingredients: "Tost çörəyi, mozzarella pendiri və kərə yağı.",
      recipe: "Çörəklərin arasına pendir əlavə olunur və qızılı rəng alana qədər bişirilir.",
    },
    {
      image: pancakes,
      title: "Pankek",
      category: "Səhər yeməkləri",
      price: "9 AZN",
      ingredients: "Un, süd, yumurta, çiyələk, bal və giləmeyvə.",
      recipe: "Pankek xəmirindən yumşaq pankeklər hazırlanır və meyvələrlə servis edilir.",
    },
    {
      image: menemen,
      title: "Menemen",
      category: "Səhər yeməkləri",
      price: "10 AZN",
      ingredients: "Pomidor, bibər, yumurta, yağ və xüsusi ədviyyatlar.",
      recipe: "Pomidor və bibər qovrulur, üzərinə yumurta əlavə edilərək qarışdırılır.",
    },
    {
      image: eggsucuk,
      title: "Sucuklu yumurta",
      category: "Səhər yeməkləri",
      price: "11 AZN",
      ingredients: "Yumurta, sucuk, pomidor sousu və göyərti.",
      recipe: "Sucuk qızardılır, üzərinə yumurta əlavə olunur və isti servis edilir.",
    },

    {
      image: sezar,
      title: "Sezar salatı",
      category: "Qəlyanaltılar",
      price: "12 AZN",
      ingredients: "Toyuq filesi, kahı, parmesan pendiri, sous və kruton.",
      recipe: "Bütün məhsullar xüsusi Sezar sousu ilə qarışdırılır.",
    },
    {
      image: fries,
      title: "Kartof fri",
      category: "Qəlyanaltılar",
      price: "7 AZN",
      ingredients: "Kartof, yağ, ketçup və ədviyyatlar.",
      recipe: "Kartoflar xırtıldayan olana qədər qızardılır.",
    },
    {
      image: nuggets,
      title: "Toyuq naggets",
      category: "Qəlyanaltılar",
      price: "10 AZN",
      ingredients: "Toyuq filesi, un, yumurta və suxarı.",
      recipe: "Toyuq parçaları xüsusi sousla marinad olunur və qızardılır.",
    },
    {
      image: bruschetta,
      title: "Brusketta",
      category: "Qəlyanaltılar",
      price: "9 AZN",
      ingredients: "Baget çörəyi, pomidor, sarımsaq və zeytun yağı.",
      recipe: "Qızardılmış çörək üzərinə pomidor qarışığı əlavə edilir.",
    },
    {
      image: pizza,
      title: "Mini pizza",
      category: "Qəlyanaltılar",
      price: "13 AZN",
      ingredients: "Pizza xəmiri, pendir, kolbasa və tərəvəzlər.",
      recipe: "Mini pizza sobada bişirilir və isti servis olunur.",
    },

    {
      image: steak,
      title: "Steyk",
      category: "Nahar yeməkləri",
      price: "35 AZN",
      ingredients: "Dana əti, xüsusi sous və tərəvəz qarniri.",
      recipe: "Ət yüksək temperaturda bişirilir və tərəvəz qarniri ilə təqdim olunur.",
    },
    {
      image: schnitzel,
      title: "Toyuq şnitsel",
      category: "Nahar yeməkləri",
      price: "18 AZN",
      ingredients: "Toyuq filesi, suxarı, yumurta və xüsusi sous.",
      recipe: "Toyuq filesi suxarıya batırılır və qızılı rəng alana qədər qızardılır.",
    },
    {
      image: spaghetti,
      title: "Spagetti",
      category: "Nahar yeməkləri",
      price: "16 AZN",
      ingredients: "Makaron, pomidor sousu, parmesan və göyərti.",
      recipe: "Makaron sous ilə qarışdırılır və parmesanla servis edilir.",
    },
    {
      image: burger,
      title: "Burger",
      category: "Nahar yeməkləri",
      price: "14 AZN",
      ingredients: "Burger çörəyi, kotlet, pendir, kahı, pomidor və xüsusi sous.",
      recipe: "Kotlet qızardılır və burger çörəyinin içində tərəvəzlərlə təqdim olunur.",
    },
    {
      image: plov,
      title: "Plov",
      category: "Nahar yeməkləri",
      price: "13 AZN",
      ingredients: "Düyü, ət, zəfəran və quru meyvələr.",
      recipe: "Ənənəvi Azərbaycan üsulu ilə hazırlanır və isti servis olunur.",
    },

    {
      image: orangejuice,
      title: "Portağal şirəsi",
      category: "İçkilər",
      price: "5 AZN",
      ingredients: "Təzə portağal.",
      recipe: "Portağallar təzə sıxılır və soyuq servis olunur.",
    },
    {
      image: lemonade,
      title: "Limonad",
      category: "İçkilər",
      price: "4 AZN",
      ingredients: "Limon, qazlı su, nanə və buz.",
      recipe: "Limon və nanə qarışdırılır, buzla birlikdə servis olunur.",
    },
    {
      image: mojito,
      title: "Mojito",
      category: "İçkilər",
      price: "7 AZN",
      ingredients: "Nanə, laym, soda və buz.",
      recipe: "Nanə və laym qarışdırılır, soda və buz əlavə olunur.",
    },
    {
      image: sangria,
      title: "Sangria",
      category: "İçkilər",
      price: "9 AZN",
      ingredients: "Meyvə qarışığı və xüsusi içki bazası.",
      recipe: "Meyvələr xüsusi içki bazası ilə qarışdırılır və soyuq servis olunur.",
    },
    {
      image: tea,
      title: "Çay",
      category: "İçkilər",
      price: "3 AZN",
      ingredients: "Azərbaycan çayı və limon.",
      recipe: "Çay dəmlənir və limonla birlikdə isti servis olunur.",
    },
  ];

  const meal = meals[Number(id)];

  if (!meal) {
    return (
      <section className="menu-detail">
        <div className="menu-detail-content">
          <h1>Menyu tapılmadı</h1>
          <Link to="/" className="back-home">Ana səhifəyə qayıt</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="menu-detail">
      <div className="menu-detail-content">
        <img src={meal.image} alt={meal.title} />

        <div className="menu-detail-info">
          <Link to="/" className="back-home">← Ana səhifəyə qayıt</Link>

          <h1>{meal.title}</h1>

          <span>{meal.price}</span>

          <p className="menu-detail-category">{meal.category}</p>

          <h3>İnqrediyentlər</h3>
          <p>{meal.ingredients}</p>

          <h3>Hazırlanması</h3>
          <p>{meal.recipe}</p>
        </div>
      </div>
    </section>
  );
}