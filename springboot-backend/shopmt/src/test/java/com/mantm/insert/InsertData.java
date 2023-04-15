package com.mantm.insert;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import com.mantm.entity.Category;
import com.mantm.entity.Delivery;
import com.mantm.repository.CategoryRepository;
import com.mantm.repository.DeliveryRepository;

@SpringBootTest
@AutoConfigureTestDatabase
@TestMethodOrder(OrderAnnotation.class)
@Rollback(false)
public class InsertData {
	
	@Autowired
	CategoryRepository categoryRepository;
	@Autowired
	DeliveryRepository deliveryRepository;
	
	@Test
	@Order(1)
	public void testCreateCategory() {
		
		// Create Category
		
		Category category1 = new Category();
		category1.setName("Văn học");
		categoryRepository.save(category1);
		
		Category category2 = new Category();
		category1.setName("Kinh tế");
		categoryRepository.save(category2);
		
		Category category3 = new Category();
		category1.setName("Chính trị");
		categoryRepository.save(category3);
		
		Category category4 = new Category();
		category1.setName("Tham khảo");
		categoryRepository.save(category4);
		
		Category category5 = new Category();
		category1.setName("Truyện tranh");
		categoryRepository.save(category5);
		
		Category category6 = new Category();
		category1.setName("Nuôi dạy con");
		categoryRepository.save(category6);
		
		Category category7 = new Category();
		category1.setName("Nấu ăn");
		categoryRepository.save(category7);
		
		Category category8 = new Category();
		category1.setName("Tâm lý");
		categoryRepository.save(category8);
		
		Category category9 = new Category();
		category1.setName("Ngoại ngữ");
		categoryRepository.save(category9);
		
		Category category10 = new Category();
		category1.setName("Kỹ năng sống");
		categoryRepository.save(category10);
	}
	
	@Test
	@Order(2)
	public void testInsertDelivery() {
		
		// Create Delivery
		Delivery delivery1 = new Delivery();
		delivery1.setName("Giao hàng nhanh");
		delivery1.setPrice(20000);
		delivery1.setDescription("Giao hàng trong 24 giờ");
		deliveryRepository.save(delivery1);
		
		Delivery delivery2 = new Delivery();
		delivery1.setName("Giao hàng hỏa tốc");
		delivery1.setPrice(30000);
		delivery1.setDescription("Giao hàng trong 6 giờ");
		deliveryRepository.save(delivery2);
		
		Delivery delivery3 = new Delivery();
		delivery1.setName("Giao hàng bình thường");
		delivery1.setPrice(12000);
		delivery1.setDescription("Giao hàng trong 3 ngày");
		deliveryRepository.save(delivery3);
	}
}
