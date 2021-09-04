package com.cookking.controllers.v1.search;

import com.cookking.models.example.ExampleDto;
import com.cookking.models.search.CreateSearchDto;
import com.cookking.models.search.SearchDto;
import com.cookking.services.example.ExampleService;
import com.cookking.services.example.ExampleServiceImpl;
import com.cookking.services.search.SearchService;
import com.cookking.services.search.SearchServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by marathoner on 2021/07/16.
 */
@RequestMapping("/api/v1/search")
@RestController
public class SearchController {

    private final SearchService searchService;

    public SearchController(SearchServiceImpl searchServiceImpl) {
        this.searchService = searchServiceImpl;
    }

    @GetMapping("/{memberId}")
    public ResponseEntity<SearchDto> getByMemberId(@PathVariable("memberId") Long memberId) {
        SearchDto searchDto = searchService.findByMemberId(memberId);
        return new ResponseEntity<>(searchDto, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<SearchDto>> getAll() {
        List<SearchDto> searches = searchService.findAll();
        return new ResponseEntity(searches, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity create(@RequestBody @Validated CreateSearchDto createSearchDto) {
        searchService.create(createSearchDto);
        return new ResponseEntity(HttpStatus.CREATED);
    }


}
