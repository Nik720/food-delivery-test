import { useState, useEffect } from 'react';

const getCategories = () => {
    return [
        { name: "Pizza", catImg: require("../../assets/images/pizza.png") },
        { name: "Burger", catImg: require("../../assets/images/burgur.png") },
        { name: "BBQ", catImg: require("../../assets/images/meat.png") },
        { name: "Shushi", catImg: require("../../assets/images/sushi.png") },
        { name: "Vegan", catImg: require("../../assets/images/broccoli.png") },
        { name: "Desserts", catImg: require("../../assets/images/cake.png") }
    ]
}

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const cat = getCategories();
        setCategories(cat)
    }, [setCategories]);

    return (
        <div>
            <section className="md:px-24  bg-blueGray-200 mt-2">
                <div className="flex flex-wrap">
                {
                    categories.map((category, index) =>
                        <div key={index} className="w-1/3 md:w-1/6 px-4 text-center">
                            <a href='./' className="relative flex flex-col min-w-0 break-words border w-full mb-8 rounded-2xl">
                                <div className="py-4 text-center  ">
                                    <img alt={category.name} className='mx-auto' src={category.catImg} />
                                    <p className='text-md mt-2 font-semibold text-[#2B2B43]'>{category.name}</p>
                                </div>
                            </a>
                        </div>
                    )
                }
                </div>
            </section>
        </div>
    )
}

export default Categories
