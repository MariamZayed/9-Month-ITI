import java.util.Comparator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Optional;
import java.util.function.BiConsumer;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class Exercise2 {

public static void main(String[] args) {
    CountryDao countryDao = InMemoryWorldDao.getInstance();
        // write your answer here
        // The Most populated city of each Continent
    final BiConsumer<String, Optional<City>> printCtty =
            (continent,city) -> {
                System.out.println(""+city.get());
            };

    final Function<City, String> getContinent =
            (city) -> {
                return countryDao.findCountryByCode(city.getCountryCode()).getContinent();
            }; 

    Collector<City, ?, Map<String, Optional<City>>> highestPopulatedCitesInContinentCollector
        = Collectors.groupingBy(
            getContinent, 
            Collectors.maxBy(Comparator.comparing(City::getPopulation))
            );
    Map<String, Optional<City>> highPopulatedCitiesByContinent = countryDao.findAllCountries()
            .stream()
            .flatMap(country -> country.getCities().stream())
            .collect(highestPopulatedCitesInContinentCollector);
    highPopulatedCitiesByContinent.forEach(printCtty);
}

}