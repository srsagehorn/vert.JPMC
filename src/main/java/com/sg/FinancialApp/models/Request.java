/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.FinancialApp.models;

import java.util.Date;
import java.util.Objects;

/**
 *
 * @author isaacrez
 */
public class Request {

    private int id;
    private int userId;
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

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
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
    public int hashCode() {
        int hash = 7;
        hash = 43 * hash + this.id;
        hash = 43 * hash + Objects.hashCode(this.timestamp);
        hash = 43 * hash + Objects.hashCode(this.stockCode);
        hash = 43 * hash + Objects.hashCode(this.value);
        return hash;
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Request other = (Request) obj;
        if (this.id != other.id) {
            return false;
        }
        if (!Objects.equals(this.stockCode, other.stockCode)) {
            return false;
        }
        if (!Objects.equals(this.value, other.value)) {
            return false;
        }
        if (!Objects.equals(this.timestamp, other.timestamp)) {
            return false;
        }
        return true;
    }
    
}
