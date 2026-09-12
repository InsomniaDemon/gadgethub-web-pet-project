package gadgethub.backend.repostories;

import gadgethub.backend.dtos.Product;
import org.springframework.jdbc.datasource.DataSourceUtils;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

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

    public List<Product> getAllProducts() throws SQLException {
        String sql = "SELECT * FROM products";

        Connection connection = DataSourceUtils.getConnection(dataSource);
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql);
             ResultSet resultSet = preparedStatement.executeQuery()) {
            return mapResultSetToProductsList(resultSet);
        } finally {
            DataSourceUtils.releaseConnection(connection, dataSource);
        }
    }

    @Deprecated
    private String getSqlForGetAllProducts(Set<String> labels, boolean isDesc, boolean isAsc) {
        StringBuilder sql = new StringBuilder("SELECT * FROM products");
        if (!labels.isEmpty()) {
            if (labels.size() == 2) {
                sql.append(" WHERE is_bestseller = true, is_new = true");
            } else if(labels.contains("bestseller")) {
                sql.append(" WHERE is_bestseller = true");
            } else if(labels.contains("new")) {
                sql.append(" WHERE is_new = true");
            }
        }
        if (isDesc) {
            sql.append(" ORDER BY price DESC");
        } else if (isAsc) {
            sql.append(" ORDER BY price ASC");
        }
        return sql.toString();
    }

    private Product mapRowToProductWithLabel(ResultSet resultSet, String label) throws SQLException {
        return new Product(
                resultSet.getLong("id"),
                resultSet.getString("title"),
                resultSet.getLong("price"),
                resultSet.getString("text"),
                resultSet.getString("image"),
                resultSet.getFloat("stars"),
                Set.of(label.substring(3)),
                resultSet.getString("type"),
                resultSet.getString("colour")
        );
    }

    private List<Product> mapResultSetToProductsListWithLabel(ResultSet resultSet, String label) throws SQLException {
        List<Product> productsList = new ArrayList<>();

        while (resultSet.next()) {
            productsList.add(mapRowToProductWithLabel(resultSet, label));
        }

        return productsList;
    }

    private Product mapRowToProduct(ResultSet resultSet) throws SQLException {
        Set<String> labels = new HashSet<>();
        if (resultSet.getBoolean("is_new")) {
            labels.add("new");
        }
        if (resultSet.getBoolean("is_bestseller")) {
            labels.add("bestseller");
        }

        return new Product(
                resultSet.getLong("id"),
                resultSet.getString("title"),
                resultSet.getLong("price"),
                resultSet.getString("text"),
                resultSet.getString("image"),
                resultSet.getFloat("stars"),
                labels,
                resultSet.getString("type"),
                resultSet.getString("colour")
        );
    }

    private List<Product> mapResultSetToProductsList(ResultSet resultSet) throws SQLException {
        List<Product> productsList = new ArrayList<>();

        while (resultSet.next()) {
            productsList.add(mapRowToProduct(resultSet));
        }

        return productsList;
    }
}
