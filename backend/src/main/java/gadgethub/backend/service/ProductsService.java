package gadgethub.backend.service;

import gadgethub.backend.dtos.Product;
import gadgethub.backend.repostories.ProductsRepository;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public class ProductsService {
    private final ProductsRepository productsRepository;

    public ProductsService(ProductsRepository productsRepository) { this.productsRepository = productsRepository; }

    public List<Product> getAllProductsWithLabel(String label) {
        try {
            return productsRepository.getAllProductsWithLabel(label);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
