function showPlanetInfo(planet)
{
    let info = "";

    if(planet === "Mercury")
        info =  `
        <h3>Mercury</h3>

        <p><b>Mercury is the smallest and closest planet to the Sun.</b></p>

        <h4>1. Distance from the Sun</h4>
        <ul>
            <li>Average distance: 57.9 million km</li>
            <li>Closest planet to the Sun, receives intense sunlight</li>
            <li>Surface experiences extreme temperature changes</li>
        </ul>

        <h4>2. Size and Structure</h4>
        <ul>
            <li>Diameter: 4,880 km</li>
            <li>Smallest planet in the Solar System</li>
            <li>Large iron core makes up most of its interior</li>
            <li>Rocky, heavily cratered surface like Earth’s Moon</li>
        </ul>

        <h4>3. Temperature</h4>
        <ul>
            <li>Day temperature: up to 430°C</li>
            <li>Night temperature: down to −180°C</li>
            <li>No thick atmosphere to trap heat</li>
        </ul>

        <h4>4. Rotation Direction and Speed</h4>
        <ul>
            <li>Rotation direction: Prograde (West to East)</li>
            <li>Very slow rotation speed</li>
            <li>Causes long days and nights</li>
        </ul>

        <h4>5. Rotation Time</h4>
        <ul>
            <li>59 Earth days to rotate once</li>
            <li>176 Earth days for one solar day</li>
        </ul>

        <h4>6. Revolution Time</h4>
        <ul>
            <li>88 Earth days to orbit the Sun</li>
            <li>Shortest year of all planets</li>
        </ul>

        <h4>7. Gravity</h4>
        <ul>
            <li>38% of Earth’s gravity</li>
            <li>60 kg person would weigh about 23 kg</li>
        </ul>

        <h4>8. Atmosphere</h4>
        <ul>
            <li>Very thin atmosphere called exosphere</li>
            <li>Contains oxygen, sodium, hydrogen, helium, potassium</li>
            <li>Cannot trap heat or stop meteors</li>
        </ul>

        <h4>9. Surface Features</h4>
        <ul>
            <li>Covered with craters, cliffs, plains</li>
            <li>Large cliffs called scarps</li>
            <li>Caloris Basin is a major crater</li>
        </ul>

        <h4>10. Moons and Rings</h4>
        <ul>
            <li>No moons</li>
            <li>No rings</li>
        </ul>

        <h4>11. Visibility from Earth</h4>
        <ul>
            <li>Visible with naked eye</li>
            <li>Seen near sunrise or sunset</li>
            <li>Difficult to see due to closeness to Sun</li>
        </ul>`;

    else if(planet === "Venus")
        info = `
        <h3>Venus</h3>

        <p><b>Venus is the second planet from the Sun and is known as Earth’s twin because of its similar size and structure.</b></p>

        <h4>1. Distance from the Sun</h4>
        <ul>
            <li>Average distance: 108.2 million km</li>
            <li>Second closest planet to the Sun</li>
            <li>Receives a large amount of solar energy</li>
        </ul>

        <h4>2. Size and Structure</h4>
        <ul>
            <li>Diameter: 12,104 km</li>
            <li>Almost the same size as Earth</li>
            <li>Rocky surface with mountains and volcanoes</li>
            <li>Internal structure: core, mantle, crust</li>
        </ul>

        <h4>3. Temperature</h4>
        <ul>
            <li>Average temperature: about 465°C</li>
            <li>Hottest planet in the Solar System</li>
            <li>Heat trapped by thick carbon dioxide atmosphere</li>
            <li>Strong greenhouse effect</li>
        </ul>

        <h4>4. Rotation Direction and Speed</h4>
        <ul>
            <li>Retrograde rotation (East to West)</li>
            <li>Sun rises in the west and sets in the east</li>
            <li>Very slow rotation</li>
        </ul>

        <h4>5. Rotation Time</h4>
        <ul>
            <li>243 Earth days to rotate once</li>
            <li>Longest day of any planet</li>
            <li>Day is longer than its year</li>
        </ul>

        <h4>6. Revolution Time</h4>
        <ul>
            <li>225 Earth days to orbit the Sun</li>
            <li>Year is shorter than its day</li>
        </ul>

        <h4>7. Gravity</h4>
        <ul>
            <li>About 90% of Earth’s gravity</li>
            <li>60 kg person would weigh about 54 kg</li>
        </ul>

        <h4>8. Atmosphere</h4>
        <ul>
            <li>Very thick carbon dioxide atmosphere</li>
            <li>Contains sulfuric acid clouds</li>
            <li>Extreme greenhouse effect</li>
            <li>Air pressure is 90× Earth’s pressure</li>
        </ul>

        <h4>9. Surface Features</h4>
        <ul>
            <li>Volcanoes, plains, and mountains</li>
            <li>Many active and extinct volcanoes</li>
            <li>Rocky, dry surface</li>
            <li>Few craters due to volcanic activity</li>
        </ul>

        <h4>10. Moons and Rings</h4>
        <ul>
            <li>No moons</li>
            <li>No rings</li>
        </ul>

        <h4>11. Visibility from Earth</h4>
        <ul>
            <li>Brightest planet in the sky</li>
            <li>Called Morning Star or Evening Star</li>
            <li>Visible near sunrise or sunset</li>
        </ul>
        `;

    else if(planet === "Earth")
        info = "Earth is the only known planet with life.";

    else if(planet === "Mars")
        info = "Mars is called the Red Planet.";

    else if(planet === "Jupiter")
        info = "Jupiter is the largest planet.";

    else if(planet === "Saturn")
        info = "Saturn has beautiful rings.";

    else if(planet === "Uranus")
        info = "Uranus rotates sideways.";

    else if(planet === "Neptune")
        info = "Neptune is the farthest planet.";

    document.getElementById("planet-info").innerHTML = info;
}