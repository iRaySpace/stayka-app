package com.irayspace.searchservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SearchController {

    @GetMapping("/search")
    public void getSearch(@RequestParam String query, @RequestParam(required = false) int bedrooms) {}
}
