package gadgethub.backend.repostories;

import gadgethub.backend.dtos.Product;
import org.springframework.jdbc.datasource.DataSourceUtils;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Repository
public class ProductsRepository {
    private final DataSource dataSource;

    public ProductsRepository(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    public List<Product> getAllProductsWithLabel(String label) throws SQLException {
        String sql = "SELECT * FROM products WHERE " + label + " = true";

        Connection connection = DataSourceUtils.getConnection(dataSource);
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql);
             ResultSet resultSet = preparedStatement.executeQuery()) {
                return mapResultSetToProductsListWithLabel(resultSet, label);
        } finally {
            DataSourceUtils.releaseConnection(connection, dataSource);
        }
    }

    private Product mapRowToProductWithLabel(ResultSet resultSet, String label) throws SQLException {
        return new Product(
                resultSet.getLong("id"),
                resultSet.getString("title"),
                resultSet.getLong("price"),
                resultSet.getString("text"),
                resultSet.getString("image"),
                resultSet.getFloat("stars"),
                Set.of(label.substring(3))
        );
    }

    private List<Product> mapResultSetToProductsListWithLabel(ResultSet resultSet, String label) throws SQLException {
        List<Product> productsList = new ArrayList<>();

        while (resultSet.next()) {
            productsList.add(mapRowToProductWithLabel(resultSet, label));
        }

        return productsList;
    }
}
