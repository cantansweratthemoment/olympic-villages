package com.DB.course_work.DAO.mapper;

import com.DB.course_work.DAO.entities.Location;
import org.apache.ibatis.annotations.Select;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LocationMapper extends JpaRepository<Location, Integer> {
    @Select("select * from Location")
    List<Location> getAllLocation();
}