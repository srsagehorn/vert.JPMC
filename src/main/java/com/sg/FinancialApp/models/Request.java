/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.FinancialApp.models;

import java.sql.Date;
import java.util.Objects;

/**
 *
 * @author isaacrez
 */
public class Request {

    private int id;
    private String userId;
    private float quantity;
    private Date timestamp;
    private String stockCode;
    private String value;
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public float getQuantity() {
        return quantity;
    }

    public void setQuantity(float quantity) {
        this.quantity = quantity;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    public String getStockCode() {
        return stockCode;
    }

    public void setStockCode(String stockCode) {
        this.stockCode = stockCode;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Request request = (Request) o;
        return id == request.id && userId == request.userId && Float.compare(request.quantity, quantity) == 0 && timestamp.equals(request.timestamp) && stockCode.equals(request.stockCode) && value.equals(request.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userId, quantity, timestamp, stockCode, value);
    }
}
