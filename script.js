function showPlanetInfo(planet)
{
    let info = "";

    if(planet === "Mercury")
        info = `
        <h2>Mercury – Facts and Features</h2>

        <h4>1. Distance from the Sun</h4>
        <p>
        Mercury is the first planet from the Sun. Its average distance is about
        57.9 million kilometers. Because it is very close to the Sun, it receives
        intense heat and radiation.
        </p>

        <h4>2. Size and Structure</h4>
        <p>
        Mercury has a diameter of about 4,880 kilometers, making it the smallest planet.
        It is rocky with a large iron core, mantle, and crust. Its surface is covered with craters.
        </p>

        <h4>3. Temperature</h4>
        <p>
        Mercury has extreme temperatures. Day temperatures reach 430°C,
        while night temperatures drop to −180°C due to lack of atmosphere.
        </p>

        <h4>4. Rotation Direction and Speed</h4>
        <p>
        Mercury rotates in a prograde direction (west to east), like Earth.
        However, its rotation is very slow.
        </p>

        <h4>5. Rotation Time</h4>
        <p>
        Mercury takes about 59 Earth days to rotate once.
        One solar day lasts about 176 Earth days.
        </p>

        <h4>6. Revolution Time</h4>
        <p>
        Mercury takes only 88 Earth days to orbit the Sun,
        making it the shortest year of any planet.
        </p>

        <h4>7. Gravity</h4>
        <p>
        Mercury has about 38% of Earth's gravity.
        Objects weigh much less due to its small size.
        </p>

        <h4>8. Atmosphere</h4>
        <p>
        Mercury has a thin exosphere made of oxygen, sodium, hydrogen,
        helium, and potassium. It cannot trap heat or protect from meteors.
        </p>

        <h4>9. Surface Features</h4>
        <p>
        Mercury’s surface is rocky and full of craters, cliffs, and plains.
        The Caloris Basin is one of its largest craters.
        </p>

        <h4>10. Moons and Rings</h4>
        <p>
        Mercury has no moons and no rings.
        </p>

        <h4>11. Special Feature – Fastest Orbit</h4>
        <p>
        Mercury moves faster around the Sun than any other planet.
        </p>
        `;

    else if(planet === "Venus")
        info = `
        <h2>Venus – Facts and Features</h2>

        <h4>1. Distance from the Sun</h4>
        <p>
        Venus is the second planet from the Sun. Its average distance is
        108.2 million kilometers. It receives large amounts of solar energy.
        </p>

        <h4>2. Size and Structure</h4>
        <p>
        Venus has a diameter of about 12,104 kilometers, similar to Earth.
        It is rocky with a core, mantle, and crust, and has mountains and volcanoes.
        </p>

        <h4>3. Temperature</h4>
        <p>
        Venus has an average temperature of about 465°C, making it the hottest planet.
        Its thick carbon dioxide atmosphere traps heat.
        </p>

        <h4>4. Rotation Direction and Speed</h4>
        <p>
        Venus rotates in a retrograde direction (east to west).
        The Sun rises in the west and sets in the east.
        </p>

        <h4>5. Rotation Time</h4>
        <p>
        Venus takes about 243 Earth days to rotate once.
        It has the longest day of any planet.
        </p>

        <h4>6. Revolution Time</h4>
        <p>
        Venus takes about 225 Earth days to orbit the Sun.
        Its year is shorter than its day.
        </p>

        <h4>7. Gravity</h4>
        <p>
        Venus has about 90% of Earth's gravity.
        </p>

        <h4>8. Atmosphere</h4>
        <p>
        Venus has a thick atmosphere made of carbon dioxide
        and sulfuric acid clouds. It traps heat strongly.
        </p>

        <h4>9. Surface Features</h4>
        <p>
        Venus has volcanoes, mountains, and plains.
        Its surface is rocky and dry.
        </p>

        <h4>10. Moons and Rings</h4>
        <p>
        Venus has no moons and no rings.
        </p>

        <h4>11. Special Feature – Hottest Planet</h4>
        <p>
        Venus is the hottest planet due to its strong greenhouse effect.
        </p>
        `;

    else if(planet === "Earth")
        info = `
    <h2>Earth – Facts and Features</h2>

    <h4>1. Distance from the Sun</h4>
    <p>
    Earth is the third planet from the Sun. Its average distance is about
    149.6 million kilometers. This distance is ideal for moderate temperatures
    and allows liquid water to exist on its surface.
    </p>

    <h4>2. Size and Structure</h4>
    <p>
    Earth has a diameter of about 12,742 kilometers, making it the fifth largest planet.
    It is a rocky planet with three main layers: crust, mantle, and core.
    Its surface contains both land and water, with water covering most of the planet.
    </p>

    <h4>3. Temperature</h4>
    <p>
    Earth has an average temperature of about 15°C.
    Temperatures vary from cold polar regions to hot deserts.
    The atmosphere helps maintain suitable temperatures for life.
    </p>

    <h4>4. Rotation Direction and Speed</h4>
    <p>
    Earth rotates in a prograde direction (west to east).
    This makes the Sun appear to rise in the east and set in the west.
    This rotation causes day and night.
    </p>

    <h4>5. Rotation Time (Length of Day)</h4>
    <p>
    Earth takes 24 hours to complete one rotation.
    This period is called one day.
    Rotation also creates time zones.
    </p>

    <h4>6. Revolution Time (Length of Year)</h4>
    <p>
    Earth takes about 365.25 days to orbit the Sun.
    This is called one year.
    The extra 0.25 day is adjusted with a leap year every four years.
    </p>

    <h4>7. Gravity</h4>
    <p>
    Earth's gravity is about 9.8 m/s².
    It keeps objects and living organisms on the surface
    and helps Earth hold its atmosphere.
    </p>

    <h4>8. Atmosphere</h4>
    <p>
    Earth's atmosphere is made mainly of nitrogen (78%) and oxygen (21%).
    It protects from harmful radiation, regulates temperature,
    and provides oxygen necessary for life.
    </p>

    <h4>9. Surface Features</h4>
    <p>
    Earth's surface includes oceans, mountains, rivers, plains, deserts, and forests.
    About 71% of Earth is covered with water.
    </p>

    <h4>10. Moons and Rings</h4>
    <p>
    Earth has one natural satellite called the Moon.
    Earth has no rings.
    </p>

    <h4>11. Special Feature – Presence of Life</h4>
    <p>
    Earth is the only known planet that supports life.
    It has water, oxygen, suitable temperature, and protective atmosphere.
    </p>
    `;

    else if(planet === "Mars")
        info =`
    <h2>Mars – Facts and Features</h2>

    <h4>1. Distance from the Sun</h4>
    <p>
    Mars is the fourth planet from the Sun. Its average distance is about
    227.9 million kilometers. Because it is farther from the Sun than Earth,
    Mars is much colder.
    </p>

    <h4>2. Size and Structure</h4>
    <p>
    Mars has a diameter of about 6,779 kilometers, making it the second smallest
    rocky planet after Mercury. It is a rocky planet with a crust, mantle, and core.
    Its surface contains rocks, dust, and iron-rich soil.
    </p>

    <h4>3. Temperature</h4>
    <p>
    Mars has an average temperature of about −63°C.
    Temperatures range from −125°C at the poles to about 20°C near the equator.
    Mars is cold because of its thin atmosphere and distance from the Sun.
    </p>

    <h4>4. Rotation Direction and Speed</h4>
    <p>
    Mars rotates in a prograde direction (west to east), similar to Earth.
    The Sun rises in the east and sets in the west.
    </p>

    <h4>5. Rotation Time (Length of Day)</h4>
    <p>
    Mars takes about 24 hours and 37 minutes to rotate once.
    This is called a Martian day or sol, and it is very similar to an Earth day.
    </p>

    <h4>6. Revolution Time (Length of Year)</h4>
    <p>
    Mars takes about 687 Earth days to orbit the Sun.
    This means one year on Mars is almost twice as long as an Earth year.
    </p>

    <h4>7. Gravity</h4>
    <p>
    Mars has about 38% of Earth’s gravity.
    A person weighing 60 kg on Earth would weigh about 23 kg on Mars.
    </p>

    <h4>8. Atmosphere</h4>
    <p>
    Mars has a thin atmosphere made mostly of carbon dioxide.
    It cannot hold much heat, making Mars cold and dry.
    </p>

    <h4>9. Surface Features</h4>
    <p>
    Mars is called the Red Planet due to iron oxide (rust) on its surface.
    It has mountains, valleys, volcanoes, and deserts.
    Olympus Mons, the largest volcano in the Solar System, is on Mars.
    </p>

    <h4>10. Moons and Rings</h4>
    <p>
    Mars has two small moons: Phobos and Deimos.
    Mars has no rings.
    </p>

    <h4>11. Special Feature – Possibility of Past Water</h4>
    <p>
    Scientists believe Mars once had liquid water.
    Evidence includes dry riverbeds and ice at the poles.
    Mars is studied for possible past or present life.
    </p>
    `;

    else if(planet === "Jupiter")
        info = `
    <h2>Jupiter – Facts and Features</h2>

    <h4>1. Distance from the Sun</h4>
    <p>
    Jupiter is the fifth planet from the Sun. Its average distance is about
    778.5 million kilometers. It is much farther from the Sun than the rocky planets.
    </p>

    <h4>2. Size and Structure</h4>
    <p>
    Jupiter has a diameter of about 142,984 kilometers, making it the largest planet
    in the Solar System. It is a gas giant made mainly of hydrogen and helium.
    It does not have a solid surface like Earth.
    </p>

    <h4>3. Temperature</h4>
    <p>
    Jupiter has an average temperature of about −110°C.
    It is cold because it is far from the Sun, but its interior is extremely hot.
    </p>

    <h4>4. Rotation Direction and Speed</h4>
    <p>
    Jupiter rotates in a prograde direction (west to east).
    It rotates very fast compared to other planets.
    </p>

    <h4>5. Rotation Time (Length of Day)</h4>
    <p>
    Jupiter takes only about 10 hours to complete one rotation.
    This makes it the planet with the shortest day.
    </p>

    <h4>6. Revolution Time (Length of Year)</h4>
    <p>
    Jupiter takes about 11.86 Earth years to complete one orbit around the Sun.
    This makes its year very long compared to Earth.
    </p>

    <h4>7. Gravity</h4>
    <p>
    Jupiter has very strong gravity, about 2.5 times Earth's gravity.
    Its massive size creates this powerful gravitational force.
    </p>

    <h4>8. Atmosphere</h4>
    <p>
    Jupiter has a thick atmosphere made mostly of hydrogen and helium.
    It contains colorful clouds and powerful storms.
    </p>

    <h4>9. Surface Features</h4>
    <p>
    Jupiter does not have a solid surface.
    It has a famous storm called the Great Red Spot,
    which is the largest storm in the Solar System.
    </p>

    <h4>10. Moons and Rings</h4>
    <p>
    Jupiter has 95 known moons, including Io, Europa, Ganymede, and Callisto.
    It also has faint ring systems.
    </p>

    <h4>11. Special Feature – Largest Planet</h4>
    <p>
    Jupiter is the largest planet in the Solar System and has the strongest gravity.
    </p>
    `;

    else if(planet === "Saturn")
        info = `
    <h2>Saturn – Facts and Features</h2>

    <h4>1. Distance from the Sun</h4>
    <p>
    Saturn is the sixth planet from the Sun. Its average distance from the Sun
    is about 1.43 billion kilometers.
    </p>

    <h4>2. Size and Structure</h4>
    <p>
    Saturn has a diameter of about 120,536 kilometers, making it the second largest planet.
    It is a gas giant made mainly of hydrogen and helium.
    </p>

    <h4>3. Temperature</h4>
    <p>
    Saturn has an average temperature of about −140°C.
    It is very cold because of its large distance from the Sun.
    </p>

    <h4>4. Rotation Direction and Speed</h4>
    <p>
    Saturn rotates in a prograde direction (west to east),
    and rotates quickly similar to Jupiter.
    </p>

    <h4>5. Rotation Time (Length of Day)</h4>
    <p>
    Saturn takes about 10.7 hours to complete one rotation.
    This makes its day much shorter than Earth’s day.
    </p>

    <h4>6. Revolution Time (Length of Year)</h4>
    <p>
    Saturn takes about 29.5 Earth years to orbit the Sun.
    This makes its year very long.
    </p>

    <h4>7. Gravity</h4>
    <p>
    Saturn’s gravity is slightly stronger than Earth’s gravity.
    However, Saturn has very low density and could float in water (theoretically).
    </p>

    <h4>8. Atmosphere</h4>
    <p>
    Saturn’s atmosphere is made mostly of hydrogen and helium.
    It has clouds, winds, and storms.
    </p>

    <h4>9. Surface Features</h4>
    <p>
    Saturn does not have a solid surface.
    It is famous for its ring system made of ice and rock particles.
    </p>

    <h4>10. Moons and Rings</h4>
    <p>
    Saturn has more than 140 moons, including Titan.
    It has the largest and most visible rings in the Solar System.
    </p>

    <h4>11. Special Feature – Ring System</h4>
    <p>
    Saturn is best known for its large, bright, and beautiful ring system.
    </p>
    `;

    else if(planet === "Uranus")
        info = `
    <h2>Uranus – Facts and Features</h2>

    <h4>1. Distance from the Sun</h4>
    <p>
    Uranus is the seventh planet from the Sun. Its average distance from the Sun
    is about 2.87 billion kilometers.
    </p>

    <h4>2. Size and Structure</h4>
    <p>
    Uranus has a diameter of about 51,118 kilometers.
    It is an ice giant made of ice, gas, and rock.
    </p>

    <h4>3. Temperature</h4>
    <p>
    Uranus is the coldest planet, with temperatures around −195°C.
    </p>

    <h4>4. Rotation Direction and Speed</h4>
    <p>
    Uranus rotates in a retrograde direction (east to west).
    It rotates on its side, which is unique.
    </p>

    <h4>5. Rotation Time (Length of Day)</h4>
    <p>
    Uranus takes about 17 hours to complete one rotation.
    </p>

    <h4>6. Revolution Time (Length of Year)</h4>
    <p>
    Uranus takes about 84 Earth years to orbit the Sun.
    </p>

    <h4>7. Gravity</h4>
    <p>
    Uranus has gravity similar to Earth but slightly weaker.
    </p>

    <h4>8. Atmosphere</h4>
    <p>
    Its atmosphere is made of hydrogen, helium, and methane.
    Methane gives Uranus its blue-green color.
    </p>

    <h4>9. Surface Features</h4>
    <p>
    Uranus does not have a solid surface.
    It is covered with thick clouds and gases.
    </p>

    <h4>10. Moons and Rings</h4>
    <p>
    Uranus has 27 known moons and also has faint rings.
    </p>

    <h4>11. Special Feature – Tilted Planet</h4>
    <p>
    Uranus rotates on its side, making it unique among planets.
    </p>
    `;

    else if(planet === "Neptune")
        info = `
    <h2>Neptune – Facts and Features</h2>

    <h4>1. Distance from the Sun</h4>
    <p>
    Neptune is the eighth and farthest planet from the Sun.
    Its average distance is about 4.5 billion kilometers.
    </p>

    <h4>2. Size and Structure</h4>
    <p>
    Neptune has a diameter of about 49,528 kilometers.
    It is an ice giant, made of ice, gas, and rock.
    </p>

    <h4>3. Temperature</h4>
    <p>
    Neptune has an average temperature of about −200°C,
    making it extremely cold.
    </p>

    <h4>4. Rotation Direction and Speed</h4>
    <p>
    Neptune rotates in a prograde direction (west to east).
    </p>

    <h4>5. Rotation Time (Length of Day)</h4>
    <p>
    Neptune takes about 16 hours to complete one rotation.
    </p>

    <h4>6. Revolution Time (Length of Year)</h4>
    <p>
    Neptune takes about 165 Earth years to orbit the Sun.
    </p>

    <h4>7. Gravity</h4>
    <p>
    Neptune’s gravity is slightly stronger than Earth’s gravity.
    </p>

    <h4>8. Atmosphere</h4>
    <p>
    Its atmosphere contains hydrogen, helium, and methane.
    Neptune has the strongest winds in the Solar System.
    </p>

    <h4>9. Surface Features</h4>
    <p>
    Neptune does not have a solid surface.
    It has storms such as the Great Dark Spot.
    </p>

    <h4>10. Moons and Rings</h4>
    <p>
    Neptune has 14 known moons, including Triton.
    It also has faint rings.
    </p>

    <h4>11. Special Feature – Strongest Winds</h4>
    <p>
    Neptune has the fastest winds in the Solar System.
    </p>
    `;

    document.getElementById("planet-info").innerHTML = info;
}


function openMOTOC()
{
    window.location.href = "motoc.html";
}

function goHome()
{
    window.location.href = "index.html";
}

function openExoplanets()
{
    window.location.href = "exo.html";
}

function goHome()
{
    window.location.href = "index.html";
}

function loadExoplanetContent()
{
    const container = document.getElementById("exoContainer");

    container.innerHTML = `

        <section class="exo-section">
            <div class="exo-text">
                <h2>What Are Exoplanets?</h2>
                <p>
                    Exoplanets are planets that orbit stars beyond our Solar System.
                    The first confirmed discovery was made in 1992. Since then,
                    thousands have been detected using methods like the transit method
                    and radial velocity technique.
                </p>
                <p>
                    Some exoplanets orbit single stars like our Sun, while others
                    orbit binary star systems. Each discovery helps scientists
                    understand how planetary systems form and evolve.
                </p>
            </div>
            <div class="exo-image">
                <img src="images/kepler.jpg" alt="Exoplanet">
                <p class="image-caption">This is Kepler 452B, which is a super-Earth exoplanet in the habitable zone of its star system.</p>
            </div>
        </section>

        <section class="exo-section">
            <div class="exo-text">
                <h2>Habitable Zone</h2>
                <p>
                    The habitable zone, often called the "Goldilocks Zone,"
                    is the region around a star where conditions may allow
                    liquid water to exist on a planet’s surface.
                </p>
                <p>
                    If a planet is too close to its star, water may evaporate.
                    If it is too far away, water may freeze. The size of this
                    zone depends on the star’s temperature and brightness.
                </p>
            </div>
            <div class="exo-image">
                <img src="images/habitable.jpg" alt="Habitable Zone">
                <p class="image-caption">The habitable zone is the region around a star where conditions may allow liquid water to exist. This is the Goldilocks zone.</p>
            </div>
        </section>

        <section class="exo-section">
            <div class="exo-text">
                <h2>Types of Exoplanets</h2>
                <p>
                    Exoplanets come in many types. Rocky planets similar to Earth
                    are called terrestrial planets. Gas giants are similar to Jupiter
                    and Saturn.
                </p>
                <p>
                    Scientists have also discovered "Super-Earths," which are larger
                    than Earth but smaller than Neptune, and "Hot Jupiters,"
                    which orbit extremely close to their stars.
                </p>
            </div>
            <div class="exo-image">
                <img src="images/types.jpg" alt="Types of Exoplanets">
                <p class="image-caption">Exoplanets can be rocky, gaseous, or a mix of both, with diverse characteristics.</p>
            </div>
        </section>

        <section class="exo-section">
            <div class="exo-text">
                <h2>Atmospheres and Biosignatures</h2>
                <p>
                    By analyzing light from distant stars, scientists can study
                    exoplanet atmospheres. Certain gases like oxygen, methane,
                    and carbon dioxide may indicate biological or geological activity. 
                </p>
                <p>
                    These potential signs of life are called biosignatures.
                    However, detecting true life requires careful analysis
                    and multiple confirmations. 
                </p>
            </div>
            <div class="exo-image">
                <img src="images/atmosphere.jpeg" alt="Exoplanet Atmosphere">
                <p class="image-caption">Exoplanet atmospheres can reveal clues about their potential for supporting life.</p>
            </div>
        </section>

        <section class="exo-section">
            <div class="exo-text">
                <h2>Future Exploration</h2>
                <p>
                    New space telescopes and observatories are being designed
                    to directly image Earth-like exoplanets. These missions aim
                    to study planetary atmospheres in greater detail. 
                </p>
                <p>
                    Future research may help answer one of humanity’s biggest
                    questions: Are we alone in the universe? Both the answers to this question are exciting and profound, and the search for exoplanets is a key part of that quest.
                </p>
            </div>
            <div class="exo-image">
                <img src="images/telescope.webp" alt="Space Telescope">
                <p class="image-caption">The James Webb Space Telescope is one of the most advanced tools for studying exoplanets.</p>
            </div>
        </section>

    `;
}