package com.cookking.mappers;

import java.util.List;

/**
 * Created by marathoner on 2021/07/16.
 */
public interface EntityMapper <D, E> {
    E toEntity(D dto);

    D toDto(E entity);

    List<E> toEntityList(List<D> dtos);

    List<D> toDtoList(List<E> entities);
}
