package gadgethub.backend.dtos;


import java.util.Set;

public record Product(Long id, String title, Long price, String text, String image, Float stars, Set<String> labels) {
}
