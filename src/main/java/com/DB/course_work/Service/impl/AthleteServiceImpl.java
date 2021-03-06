package com.DB.course_work.Service.impl;

import com.DB.course_work.DAO.entities.*;
import com.DB.course_work.DAO.mapper.*;
import com.DB.course_work.Service.AthleteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Period;
import java.util.List;

@Service
public class AthleteServiceImpl implements AthleteService {

    @Autowired
    private UsersMapper usersMapper;
    @Autowired
    private PersonMapper personMapper;
    @Autowired
    private EventMapper eventMapper;
    @Autowired
    private LocationMapper locationMapper;
    @Autowired
    private BuildingMapper buildingMapper;

    @Override
    public Person findManagerByLogin(String SALogin) {
        Integer userId = usersMapper.findIdByLogin(SALogin);
        return personMapper.findPersonById(userId);
    }

    @Override
    public List<Event> findOwnEvents(Integer AthleteId) {
        return eventMapper.findEventsByPersonId(AthleteId);
    }

    @Override
    public List<Location> findAllLocations() {
        return locationMapper.getAllLocation();
    }

    @Override
    public List<Building> findBuildingsByLocId(Integer locationId) {
        return buildingMapper.getBuildingsByLocId(locationId);
    }
}
