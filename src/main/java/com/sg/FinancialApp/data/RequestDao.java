/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.FinancialApp.data;

import com.sg.FinancialApp.models.Request;
import java.util.List;
import org.springframework.stereotype.Repository;

/**
 *
 * @author isaacrez
 */
@Repository
public interface RequestDao {
    List<Request> getAllRequests();
    Request getRequestById(int id);
    Request addRequest();
    void updateRequest(Request request);
    void deleteRequestById(int id);
}
